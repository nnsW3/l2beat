import { safeGetTokenByAssetId } from '@l2beat/config'
import { AssetId } from '@l2beat/shared-pure'
import React from 'react'

import { TVLProjectBreakdown } from '../../../pages/scaling/projects-tvl-breakdown/props/getTvlBreakdownView'
import { formatNumberWithCommas } from '../../../utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../tooltip/Tooltip'

interface TokenAmountCellProps {
  assetId: AssetId
  amount: string
  escrows?: TVLProjectBreakdown['canonical'][number]['escrows']
}

export function TokenAmountCell(props: TokenAmountCellProps) {
  const token = safeGetTokenByAssetId(props.assetId)
  const formula =
    token?.supply === 'totalSupply'
      ? 'Total Supply'
      : token?.supply === 'circulatingSupply'
        ? 'Circulating Supply'
        : ''

  return token?.source === 'canonical' && props.escrows ? (
    <Tooltip>
      <TooltipTrigger className="flex flex-col items-end gap-2 font-medium text-xs">
        {formatNumberWithCommas(Number(props.amount))}
        {props.escrows.length > 1 &&
          props.escrows.map((escrow) => (
            <div
              key={escrow.escrowAddress.toString()}
              className="hidden font-normal text-black/80 dark:text-white/80"
              data-role="multiple-escrows-hidden"
              data-token={props.assetId}
            >
              {formatNumberWithCommas(Number(escrow.amount))}
            </div>
          ))}
      </TooltipTrigger>
      <TooltipContent>Tokens locked in the escrow</TooltipContent>
    </Tooltip>
  ) : (
    <Tooltip>
      <TooltipTrigger className="font-medium text-xs">
        {formatNumberWithCommas(Number(props.amount))}
      </TooltipTrigger>
      <TooltipContent>{formula}</TooltipContent>
    </Tooltip>
  )
}
