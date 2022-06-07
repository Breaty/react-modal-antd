import { Button, Modal, ModalProps } from "antd";
import { useMemo, useState } from "react";
import { PropsType } from "../type";



const Index = (props: PropsType) => {
    const [visible, setVisible] = useState<boolean>(false)

    const subProps = useMemo(() => {
        const { btnName = 'Open Modal', btnStyle, btnClassName = "", title = "提示", ...mprops } = props
        return {
            oprops: { btnName, btnStyle, btnClassName },
            mprops: { ...mprops, title }
        }
    }, [props])

    return <div>
        <Button style={subProps.oprops.btnStyle} className={subProps.oprops.btnClassName} onClick={() => setVisible(true)}>{subProps.oprops.btnName}</Button>
        {visible && (
            <Modal {...subProps.mprops} visible={visible} footer={null} onCancel={() => setVisible(false)}>
                {subProps.mprops.children}
            </Modal>
        )}
    </div>
}

export default Index;