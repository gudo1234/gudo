import _0x1062d7 from 'node-fetch';
import _0x452037 from 'axios';
import _0x3ab624 from 'yt-search';
import {
    youtubedl,
    youtubedlv2
} from '@bochilteam/scraper';
import _0x35a232 from 'ytdl-core';
import {
    bestFormat,
    getUrlDl
} from '../lib/y2dl.js';
import _0x38e68c from '../lib/ytdll.js';
import _0x3b1c0e from 'fs';
let limit1 = 0x64,
    limit2 = 0x190,
    limit_a1 = 0x32,
    limit_a2 = 0x190;
const handler = async (_0x1ec564, {
    conn: _0x32752d,
    command: _0xc83486,
    args: _0x47f0b5,
    text: _0x12f5b9,
    usedPrefix: _0x4277a6
}) => {
    let _0x430a02 = {
        'key': {
            'participants': '0@s.whatsapp.net',
            'remoteJid': 'status@broadcast',
            'fromMe': ![],
            'id': 'Halo'
        },
        'message': {
            'contactMessage': {
                'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid=' + _0x1ec564['sender']['split']('@')[0x0] + ':' + _0x1ec564['sender']['split']('@')[0x0] + '\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'
            }
        },
        'participant': '0@s.whatsapp.net'
    };
    if (!_0x12f5b9) return _0x32752d['reply'](_0x1ec564['chat'], '>\x20ejemplo:\x20\x0a\x20' + (_0x4277a6 + _0xc83486) + '\x20canwe\x20kiss\x20forever', _0x430a02, _0x1ec564);
    try {
        //_0x32752d['reply'](_0x1ec564['chat'], '' + wait + waitt + waitt + waittt + waitttt + waitttt, _0x430a02, _0x1ec564);
        const _0x169d21 = await search(_0x47f0b5['join']('\x20'));
        let _0x4620cb = '';
        if (_0xc83486 === 'play' || _0xc83486 == 'audio' || _0xc83486 == 'play3' || _0xc83486 == 'playdoc' || _0xc83486 == 'musica' || _0xc83486 == 'sonido') _0x4620cb = 'audio\x20🔊';
        else(_0xc83486 === 'play2' || _0xc83486 == 'video' || _0xc83486 == 'play4' || _0xc83486 == 'playdoc2' || _0xc83486 == 'peliculas' || _0xc83486 == 'pelis') && (_0x4620cb = 'video\x20🎥');
        const _0x3f93f3 = ('乂✰\x20Y\x20O\x20U\x20T\x20U\x20B\x20E\x20✰乂\x0a⇄\x20\x20\x20\x20◁\x20\x20\x20ㅤ\x20\x20❚❚ㅤ\x20\x20\x20▷ㅤ\x20\x20\x20\x20↻\x0a>\x20乂✰\x20Autor:\x20' + _0x169d21[0x0]['author']['name'] + '\x20ღ\x0a>\x20乂✰\x20Publicado:\x20' + _0x169d21[0x0]['ago'] + '\x20ღ\x0a>\x20乂✰\x20Duración:\x20' + secondString(_0x169d21[0x0]['duration']['seconds']) + '\x20ღ\x0a>\x20乂✰\x20Views:\x20' + ('' + MilesNumber(_0x169d21[0x0]['views'])) + '\x20ღ')['trim']();
        /**await _0x32752d['sendMessage'](_0x1ec564['chat'], {
            'text': _0x3f93f3,
            'contextInfo': {
                'externalAdReply': {
                    'title': _0x169d21[0x0]['title'],
                    'body': packname,
                    'thumbnailUrl': _0x169d21[0x0]['thumbnail'],
                    'mediaType': 0x1,
                    'showAdAttribution': !![],
                    'renderLargerThumbnail': !![]
                }
            }
        }, {
            'quoted': _0x1ec564
        });**/
        if (_0xc83486 == 'p' || _0xc83486 == 'audio' || _0xc83486 == 'musica' || _0xc83486 == 'sonido') {
            const _0x203114 = '128kbps',
                _0x5ab925 = _0x169d21[0x0]['url'],
                _0x16cb71 = await youtubedl(_0x5ab925)['catch'](async _0x37b270 => await youtubedlv2(_0x5ab925)),
                _0xef321f = await _0x16cb71['audio'][_0x203114]['download'](),
                _0x35b444 = await _0x16cb71['title'],
                _0x1d97d6 = await _0x16cb71?.['size'],
                _0x585629 = _0x1d97d6?.['replace']('MB', '')?.['replace']('GB', '')?.['replace']('KB', ''),
                _0x38a1ce = await getBuffer(_0xef321f),
                _0x4114c3 = _0x38a1ce['byteLength'],
                _0x21ab8a = _0x4114c3 / 0x400,
                _0xc27fd7 = _0x21ab8a / 0x400,
                _0x4cf756 = _0xc27fd7['toFixed'](0x2);
            if (_0x4cf756 >= limit_a2) return;
            if (_0x4cf756 >= limit_a1 && _0x4cf756 <= limit_a2) {
                await _0x32752d['sendMessage'](_0x1ec564['chat'], {
                    'document': _0x38a1ce,
                    'mimetype': 'audio/mpeg',
                    'fileName': _0x35b444 + '.mp3'
                }, {
                    'quoted': _0x1ec564
                });
                return;
            } else {
                await _0x32752d['sendMessage'](_0x1ec564['chat'], {
                    'audio': _0x38a1ce,
                    'mimetype': 'audio/mpeg',
                    'fileName': _0x35b444 + '.mp3'
                }, {
                    'quoted': _0x1ec564
                });
                return;
            }
        }
        if (_0xc83486 == 'm' || _0xc83486 == 'playdoc') {
            const _0x30c131 = '128kbps',
                _0x418a11 = _0x169d21[0x0]['url'],
                _0x49948b = await youtubedl(_0x418a11)['catch'](async _0x2206b7 => await youtubedlv2(_0x418a11)),
                _0x3e3ccf = await _0x49948b['audio'][_0x30c131]['download'](),
                _0x83c4aa = await _0x49948b['title'],
                _0x37cead = await _0x49948b?.['size'],
                _0x9e6dee = _0x37cead?.['replace']('MB', '')?.['replace']('GB', '')?.['replace']('KB', ''),
                _0x149602 = await getBuffer(_0x3e3ccf),
                _0x2fecf9 = _0x149602['byteLength'],
                _0x506a7e = _0x2fecf9 / 0x400,
                _0xd235fd = _0x506a7e / 0x400,
                _0x452d84 = _0xd235fd['toFixed'](0x2);
            if (_0x452d84 >= limit_a2) return;
            if (_0x452d84 >= limit_a1 && _0x452d84 <= limit_a2) {
                await _0x32752d['sendMessage'](_0x1ec564['chat'], {
                    'document': _0x149602,
                    'mimetype': 'audio/mpeg',
                    'fileName': _0x83c4aa + '.mp3'
                }, {
                    'quoted': _0x1ec564
                });
                return;
            } else {
                await _0x32752d['sendMessage'](_0x1ec564['chat'], {
                    'document': _0x149602,
                    'mimetype': 'audio/mpeg',
                    'fileName': _0x83c4aa + '.mp3'
                }, {
                    'quoted': _0x1ec564
                });
                return;
            }
        }
        if (_0xc83486 == 'v' || _0xc83486 == 'video') {
            const _0x5f4d29 = '360',
                _0x14b433 = _0x5f4d29 + 'p',
                _0x48b711 = _0x169d21[0x0]['url'],
                _0x2b2478 = await youtubedl(_0x48b711)['catch'](async _0x26d644 => await youtubedlv2(_0x48b711)),
                _0x16b3ee = await _0x2b2478['video'][_0x14b433]['download'](),
                _0xcc2e8f = await _0x2b2478['title'],
                _0x2649a4 = await _0x2b2478?.['size'],
                _0x194160 = _0x2649a4?.['replace']('MB', '')?.['replace']('GB', '')?.['replace']('KB', ''),
                _0x1d50d4 = await getBuffer(_0x16b3ee),
                _0x1ee708 = _0x1d50d4['byteLength'],
                _0x5844e0 = _0x1ee708 / 0x400,
                _0x19dd5a = _0x5844e0 / 0x400,
                _0x37a2e9 = _0x19dd5a['toFixed'](0x2);
            if (_0x37a2e9 >= limit2) return;
            if (_0x37a2e9 >= limit1 && _0x37a2e9 <= limit2) {
                await _0x32752d['sendMessage'](_0x1ec564['chat'], {
                    'document': _0x1d50d4,
                    'mimetype': 'video/mp4',
                    'fileName': _0xcc2e8f + '.mp4'
                }, {
                    'quoted': _0x1ec564
                });
                return;
            } else {
                await _0x32752d['sendMessage'](_0x1ec564['chat'], {
                    'video': _0x1d50d4,
                    'mimetype': 'video/mp4',
                    'fileName': _0xcc2e8f + '.mp4'
                }, {
                    'quoted': _0x1ec564
                });
                return;
            }
        }
        if (_0xc83486 == 'mm' || _0xc83486 == 'playdoc2' || _0xc83486 == 'peliculas' || _0xc83486 == 'pelis') {
            const _0x1620ee = '360',
                _0x3d3b21 = _0x1620ee + 'p',
                _0x2fad83 = _0x169d21[0x0]['url'],
                _0x541d1e = await youtubedl(_0x2fad83)['catch'](async _0x72c24c => await youtubedlv2(_0x2fad83)),
                _0x57b530 = await _0x541d1e['video'][_0x3d3b21]['download'](),
                _0x316c03 = await _0x541d1e['title'],
                _0x33a71e = await _0x541d1e?.['size'],
                _0x377652 = _0x33a71e?.['replace']('MB', '')?.['replace']('GB', '')?.['replace']('KB', ''),
                _0x1dbc40 = await getBuffer(_0x57b530),
                _0x1532ad = _0x1dbc40['byteLength'],
                _0x358b6c = _0x1532ad / 0x400,
                _0x312434 = _0x358b6c / 0x400,
                _0x1b7d1a = _0x312434['toFixed'](0x2);
            if (_0x1b7d1a >= limit2) return;
            if (_0x1b7d1a >= limit1 && _0x1b7d1a <= limit2) {
                await _0x32752d['sendMessage'](_0x1ec564['chat'], {
                    'document': _0x1dbc40,
                    'mimetype': 'video/mp4',
                    'fileName': _0x316c03 + '.mp4'
                }, {
                    'quoted': _0x1ec564
                });
                return;
            } else {
                await _0x32752d['sendMessage'](_0x1ec564['chat'], {
                    'document': _0x1dbc40,
                    'mimetype': 'video/mp4',
                    'fileName': _0x316c03 + '.mp4'
                }, {
                    'quoted': _0x1ec564
                });
                return;
            }
        }
    } catch (_0x5c9fc1) {
        console['log'](_0x5c9fc1);
        throw '>\x20•Se\x20generó\x20un\x20error\x20temporal,\x20usar\x20.video\x20.audio';
    }
};
handler['help'] = ['play', 'play2']['map'](_0x4f6d4f => _0x4f6d4f + '\x20<\x20busqueda\x20>'), handler['help'] = ['pla3', 'play4']['map'](_0x508d75 => _0x508d75 + '\x20<\x20busqueda\x20>'), handler['tags'] = ['downloader'], handler['command'] = /^(p|v|m|mm)$/i, handler['register'] = false;
export default handler;
async function search(_0x5118cc, _0x44f809 = {}) {
    const _0xdcd597 = await _0x3ab624['search']({
        'query': _0x5118cc,
        'hl': 'es',
        'gl': 'ES',
        ..._0x44f809
    });
    return _0xdcd597['videos'];
}

function MilesNumber(_0xc04864) {
    const _0x54a30f = /(\d)(?=(\d{3})+(?!\d))/g,
        _0x22c804 = '$1.',
        _0x342ce7 = _0xc04864['toString']()['split']('.');
    return _0x342ce7[0x0] = _0x342ce7[0x0]['replace'](_0x54a30f, _0x22c804), _0x342ce7[0x1] ? _0x342ce7['join']('.') : _0x342ce7[0x0];
}

function secondString(_0x51b90c) {
    _0x51b90c = Number(_0x51b90c);
    const _0x3e1864 = Math['floor'](_0x51b90c / (0xe10 * 0x18)),
        _0x306385 = Math['floor'](_0x51b90c % (0xe10 * 0x18) / 0xe10),
        _0x24dd01 = Math['floor'](_0x51b90c % 0xe10 / 0x3c),
        _0x558512 = Math['floor'](_0x51b90c % 0x3c),
        _0x4664f4 = _0x3e1864 > 0x0 ? _0x3e1864 + (_0x3e1864 == 0x1 ? '\x20día,\x20' : '\x20días,\x20') : '',
        _0x505920 = _0x306385 > 0x0 ? _0x306385 + (_0x306385 == 0x1 ? '\x20hora,\x20' : '\x20horas,\x20') : '',
        _0x20bcb1 = _0x24dd01 > 0x0 ? _0x24dd01 + (_0x24dd01 == 0x1 ? '\x20minuto,\x20' : '\x20minutos,\x20') : '',
        _0xd020b2 = _0x558512 > 0x0 ? _0x558512 + (_0x558512 == 0x1 ? '\x20segundo' : '\x20segundos') : '';
    return _0x4664f4 + _0x505920 + _0x20bcb1 + _0xd020b2;
}

function bytesToSize(_0xa703e) {
    return new Promise((_0x224e02, _0x2dbc23) => {
        const _0x377a3a = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (_0xa703e === 0x0) return 'n/a';
        const _0x56a894 = parseInt(Math['floor'](Math['log'](_0xa703e) / Math['log'](0x400)), 0xa);
        if (_0x56a894 === 0x0) _0x224e02(_0xa703e + '\x20' + _0x377a3a[_0x56a894]);
        _0x224e02((_0xa703e / 0x400 ** _0x56a894)['toFixed'](0x1) + '\x20' + _0x377a3a[_0x56a894]);
    });
}
const getBuffer = async (_0x5889b5, _0x47910d) => {
    _0x47910d ? _0x47910d : {};
    const _0x265cd0 = await _0x452037({
        'method': 'get',
        'url': _0x5889b5,
        'headers': {
            'DNT': 0x1,
            'Upgrade-Insecure-Request': 0x1
        },
        ..._0x47910d,
        'responseType': 'arraybuffer'
    });
    return _0x265cd0['data'];
};