import * as React from 'react'
import { HTMLAttributes } from 'react'
import { ChromePicker, ColorResult } from 'react-color'

export interface ColorPickerProps {
    onChange?: (color: any) => void
    color?: string
}

export interface ColorPickerState {
    displayColorPicker?: boolean
    color?: string
}

export default class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState> {
    private node: HTMLDivElement | null = null

    constructor(props: ColorPickerProps) {
        super(props)
        this.state = {
            displayColorPicker: false,
            color: this.props.color
        }
    }

    public componentDidMount(): void {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    public render(): JSX.Element {
        const styles = {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: this.state.color,
                position: 'absolute',
                top: '25px',
                left: '52.5px',
                zIndex: '999'
            } as HTMLAttributes<HTMLDivElement>,
            swatcthColor: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: this.state.color
            },
            swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block'
            },
            one: {
                display: 'inline-block'
            }
        }

        return (
            <div style={styles.one}>
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.swatcthColor} />
                </div>
                {this.state.displayColorPicker ? (
                    <div style={styles.color} ref={(node) => this.node = node}>
                        <ChromePicker
                            disableAlpha={true}
                            color={this.state.color}
                            onChange={this.handleChange}
                        />
                    </div>
                ) : null}
            </div>
        )
    }

    private handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }

    private handleChange = (color: ColorResult) => {
        this.setState({ color: color.hex })
        if (this.props.onChange) {
            this.props.onChange(color.hex)
        }
    }

    private handleClickOutside = (e: MouseEvent) => {
        const isColorPicker = this.node && this.node.contains(e.target as Node)
        if (isColorPicker && this.state.displayColorPicker) {
            return
        }
        this.setState({ displayColorPicker: false })
    }
}
