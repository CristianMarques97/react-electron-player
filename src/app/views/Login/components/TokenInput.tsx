import { TextField } from '@material-ui/core'
import React from 'react'

interface TokenInputProps {
  id?: string
  value: string
  onChange: (value: string) => void
  onPaste?: (event: React.ClipboardEvent) => void
  tabIndex?: number
  autoFocus?: boolean
}

export default function TokenInput({
  id,
  value,
  onChange,
  onPaste,
  tabIndex,
  autoFocus,
}: TokenInputProps) {
  const onTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChange(event.target.value)
  }

  return (
    <TextField
      id={id}
      autoFocus={autoFocus}
      tabIndex={tabIndex}
      variant="filled"
      value={value}
      onChange={onTextChange}
      onPasteCapture={onPaste}
      inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
    />
  )
}

TokenInput.defaultProps = {
  id: '',
  onPaste: null,
  tabIndex: null,
  autoFocus: null,
}
