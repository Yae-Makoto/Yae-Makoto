import { ReactComponent as Yang } from './svg/yang.svg';
import { ReactComponent as Yin } from './svg/yin.svg';
import { ReactComponent as Yinyang } from './svg/yinyang.svg';

export function SvgYang(props) {
    return <Yang {...props} />
};

export function SvgYin(props) {
    return <Yin {...props} />
};

export function SvgYinyang(props) {
    return <Yinyang {...props} />
};
