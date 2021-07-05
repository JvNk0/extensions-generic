import {
    ContentRating,
    LanguageCode,
    SourceInfo,
    TagType
} from 'paperback-extensions-common'
import {
    MangaBox,
    getExportVersion
} from '../MangaBox'

const MANGABAT_DOMAIN = 'https://m.mangabat.com'

export const MangaBatInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'MangaBat',
    description: 'Extension that pulls manga from m.mangabat.com',
    author: 'nar1n',
    authorWebsite: 'https://github.com/nar1n',
    icon: 'logo.png',
    contentRating: ContentRating.EVERYONE,
    websiteBaseURL: MANGABAT_DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: TagType.GREEN
        }
    ]
}

export class MangaBat extends MangaBox {
    baseUrl: string = MANGABAT_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
    override mangaListPath = 'manga-list-all'
    override mangaListSelector = 'div.list-story-item'
}