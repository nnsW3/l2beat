import { createHash } from 'crypto'
import { AmountConfigEntry, assertUnreachable } from '@l2beat/shared-pure'

export type AmountId = string

export function createAmountId(amountConfig: AmountConfigEntry): AmountId {
  const input = []

  input.push(amountConfig.chain)
  input.push(amountConfig.project.toString())
  input.push(amountConfig.type)
  // category is not used in the ID calculation.
  // sinceTimestamp is not used in the ID calculation.
  // untilTimestamp is not used in the ID calculation.
  // includeInTotal is not used in the ID calculation.
  // decimals is not used in the ID calculation.

  switch (amountConfig.type) {
    case 'totalSupply':
      input.push(amountConfig.address.toString())
      break
    case 'circulatingSupply':
      input.push(amountConfig.address.toString())
      input.push(amountConfig.coingeckoId.toString())
      break
    case 'escrow':
      input.push(amountConfig.address.toString())
      input.push(amountConfig.escrowAddress.toString())
      break
    default:
      assertUnreachable(amountConfig)
  }

  const hash = createHash('sha1').update(input.join('')).digest('hex')
  return hash.slice(0, 12)
}
