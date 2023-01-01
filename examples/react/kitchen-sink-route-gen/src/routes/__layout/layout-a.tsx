import * as React from 'react'
import { routeConfig } from '../../routes.generated/__layout/layout-a'

routeConfig.generate({
  component: LayoutA,
})

function LayoutA() {
  return (
    <div>
      <div>Layout A</div>
    </div>
  )
}
