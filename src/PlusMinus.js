import Button from './Button';
import StoreMaker from './StoreMaker';
const ButtonMaker = StoreMaker(Button);

export const Plus1 = ButtonMaker({f: n => n + 1, label: '+'});
export const Minus1 = ButtonMaker({f: n => n - 1, label: '-'});