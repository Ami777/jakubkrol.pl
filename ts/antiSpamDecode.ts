interface AntiSpamDecodeData {
    classPostfix : string;
    hrefPrefix : string;
    encoded : number[];
}

function doDecode(encodedDatas : AntiSpamDecodeData[]) {
    for(let data of encodedDatas){
        //Simple as that ;)
        const decoded = data.encoded.map(num => String.fromCharCode(num - 15)).join('');
        const href = data.hrefPrefix + decoded;

        const els = document.querySelectorAll('.enc-my-' + data.classPostfix);
        for(let i = 0; i < els.length; i++){
            const el = <HTMLAnchorElement>els[i];
            el.innerText = decoded;
            el.setAttribute('href', href);
        }
    }
}

export default function antiSpamDecode(){
    const encodedDatas : AntiSpamDecodeData[] = [
        {
            classPostfix : 'email',
            hrefPrefix : 'mailto:',
            encoded : [121, 61, 122, 79, 131, 61, 127, 123],
        },
        {
            classPostfix : 'tel',
            hrefPrefix : 'tel:',
            encoded : [58, 67, 71, 47, 71, 71, 64, 60, 72, 66, 64, 60, 64, 67, 67],
        },
    ];

    setTimeout(() => doDecode(encodedDatas), 100); //Run it after 100ms, to make sure bots already read page contents
}