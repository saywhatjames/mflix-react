import * as MenusActions from "./menu.actions";
export interface MenuState {
    isMenuOpen: boolean
}

export const initialMenuState: MenuState = {
    isMenuOpen: false
}

const reducer = (
    state: MenuState = initialMenuState,
    action: any
): MenuState => {
    switch (action.type) {
        case MenusActions.TOGGLE_MENU:
            console.log('toggling menu')
            return {
                isMenuOpen: !state.isMenuOpen
            }
    }
    return state

}


export default reducer