const ICONS_ASSETS_PATH = '/icons'

const iconsMap = {
    'more': 'btn-more',
    'edit': 'btn-edit',
    'view': 'btn-view'
}

export const mapIcon = type => `${ICONS_ASSETS_PATH}/${iconsMap[type]}.svg`

//export const mapSize = size => null //TODO
