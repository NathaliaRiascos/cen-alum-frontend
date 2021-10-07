import { ReactComponent as MoreIcon } from 'assets/icons/btn-more.svg'
import { ReactComponent as EditIcon } from 'assets/icons/btn-edit.svg'
import { ReactComponent as ViewIcon } from 'assets/icons/btn-view.svg'
import { ReactComponent as LinkIcon } from 'assets/icons/link.svg'

import AddIcon from '@mui/icons-material/Add';
//import LinkIcon from '@mui/icons-material/Link';

//const ICONS_ASSETS_PATH = '/icons'
/*
const iconsMap = {
    'more': 'btn-more',
    'edit': 'btn-edit',
    'view': 'btn-view'
}

export const mapIcon = type => `${ICONS_ASSETS_PATH}/${iconsMap[type]}.svg`
*/
//export const mapSize = size => null //TODO

const iconsMap = {
    'more': <MoreIcon />,
    'edit': <EditIcon />,
    'view': <ViewIcon />,
    'link': <LinkIcon />,
    'add': <AddIcon />
}

export const mapIcon = type => iconsMap[type]