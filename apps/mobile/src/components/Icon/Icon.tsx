import { useMemo } from 'react'
import { SvgProps } from 'react-native-svg'
import UserGroupIcon from './UserGroupIcon'
import UserIcon from './UserIcon'

const icons = {
  userIcon: UserIcon,
  userGroupIcon: UserGroupIcon,
}

export type IconProps = SvgProps & {
  name: keyof typeof icons
}

const Icon = ({ name, ...props }: Readonly<IconProps>) => {
  const CurrentIcon = useMemo(() => icons[name], [])

  return <CurrentIcon {...props} />
}

export default Icon
