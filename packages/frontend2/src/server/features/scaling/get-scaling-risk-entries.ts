import { layer2s } from '@l2beat/config'
import { type ProjectId } from '@l2beat/shared-pure'
import { getImplementationChangeReport } from '../implementation-change-report/get-implementation-change-report'
import { orderByTvl } from '../tvl/order-by-tvl'
import { getProjectsVerificationStatuses } from '../verification-status/get-projects-verification-statuses'
import { getCommonScalingEntry } from './get-common-scaling-entry'

export async function getScalingRiskEntries(tvl: Record<ProjectId, number>) {
  const orderedProjects = orderByTvl(layer2s, tvl)

  const implementationChangeReport = await getImplementationChangeReport()
  const projectsVerificationStatuses = await getProjectsVerificationStatuses()

  return orderedProjects.map((project) => {
    const isVerified = !!projectsVerificationStatuses[project.id.toString()]
    const hasImplementationChanged =
      !!implementationChangeReport.projects[project.id.toString()]

    return {
      entryType: 'risk',
      ...getCommonScalingEntry({
        project,
        isVerified,
        hasImplementationChanged,
      }),
      risks: project.riskView,
    }
  })
}

export type ScalingRiskEntry = Awaited<
  ReturnType<typeof getScalingRiskEntries>
>[number]
