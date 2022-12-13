import {ObjetoSubMenu} from '../RepadieMenuModel/SubMenuRepModel'
export class ObjetoMenu{
    constructor(
        public id: string,
        public title : string,
        public icon: string,
        public url : string,
        public submenu : ObjetoSubMenu[] 
    ){
        
    }
}
