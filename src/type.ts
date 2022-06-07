import { ModalProps } from "antd";

export type PropsType = ModalProps & {
    btnStyle?: React.CSSProperties,
    btnClassName?: string,
    children?: React.ReactNode,
    btnName?: React.ReactNode,
}