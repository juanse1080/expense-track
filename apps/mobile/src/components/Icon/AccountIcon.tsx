import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function AccountIcon(props: Readonly<SvgProps>) {
  return (
    <Svg viewBox="0 -960 960 960" {...props}>
      <Path d="M255.09-256.5q51.41-35.5 105.41-56T480-333q65.5 0 119.5 20.5t106 56q41.5-41.5 66.75-98.15Q797.5-411.3 797.5-479.9q0-132.1-92.75-224.85T480-797.5q-132 0-224.75 92.75T162.5-479.9q0 68.6 25.25 125.25Q213-298 255.09-256.5zM480.14-467q-48.14 0-80.64-32.36t-32.5-80.5q0-48.14 32.36-80.64t80.5-32.5q48.14 0 80.64 32.36t32.5 80.5q0 48.14-32.36 80.64t-80.5 32.5zM480-137q-71.41 0-134.32-26.76-62.9-26.77-109.04-73Q190.5-283 163.75-345.84 137-408.67 137-480.25q0-71.66 26.76-134.32 26.77-62.65 73-108.79Q283-769.5 345.84-796.25 408.67-823 480.25-823q71.66 0 134.32 26.76 62.65 26.77 108.79 73Q769.5-677 796.25-614.46 823-551.91 823-480q0 71.41-26.76 134.32-26.77 62.9-73 109.04Q677-190.5 614.46-163.75 551.91-137 480-137zm-.03-25.5q55.53 0 110.28-20.25T685-238q-40-31.5-91.72-50.5t-113.19-19q-61.47 0-114.28 18T275-238q40 35 94.72 55.25t110.25 20.25zm.03-330q36.5 0 62-25.5t25.5-62q0-36.5-25.5-62t-62-25.5q-36.5 0-62 25.5t-25.5 62q0 36.5 25.5 62t62 25.5zm0-87.5zm0 345z" />
    </Svg>
  )
}

export default AccountIcon
