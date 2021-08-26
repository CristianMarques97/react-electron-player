/* eslint-disable react/jsx-props-no-spreading */
import { SvgIcon, SvgIconTypeMap } from '@material-ui/core'
import { DefaultComponentProps } from '@material-ui/core/OverridableComponent'

export default function MinimizeIcon(
  props: DefaultComponentProps<SvgIconTypeMap<any, 'svg'>>
) {
  return (
    <SvgIcon {...props}>
      <path d="M24 22h-24v-20h24v20zm-23-9v8h10v-8h-10zm22 8v-18h-22v9h11v9h11zm-4-9h-5v-5h1v3.241l5.241-5.241.759.759-5.241 5.241h3.241v1z" />
    </SvgIcon>
  )
}
