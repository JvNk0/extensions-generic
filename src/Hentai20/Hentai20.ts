import {
    ContentRating,
    LanguageCode,
    SourceInfo,
    TagType
} from 'paperback-extensions-common'
import {
    getExportVersion,
    Madara
} from '../Madara'

const HENTAI20_DOMAIN = 'https://hentai20.com'

export const Hentai20Info: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'Hentai20',
    description: 'Extension that pulls manga from hentai20.com',
    author: 'Netsky',
    authorWebsite: 'http://github.com/TheNetsky',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: HENTAI20_DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: TagType.GREEN
        },
        {
            text: '18+',
            type: TagType.YELLOW
        },
        {
            text: 'Cloudflare',
            type: TagType.RED
        }
    ]
}

export class Hentai20 extends Madara {
    baseUrl: string = HENTAI20_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
    override hasAdvancedSearchPage = true
    override userAgentRandomizer = ''
}