export default function bgEffect(){
    const body = <HTMLBodyElement>document.querySelector('body');

    let deg = 135;
    let dir = 1;

    body.addEventListener('mousemove', e => {
        deg += dir;
        if (deg >= 145 || deg <= 125){
            dir *= -1;
        }

        const {clientY, clientX} = e;
        const {clientHeight, clientWidth} = body;

        const bgGradientStart = '#f5f5f5';
        const bgGradientEnd = '#fcfeff';

        const maxDist = Math.sqrt(Math.pow(clientHeight, 2) + Math.pow(clientWidth, 2));
        const dist = Math.sqrt(Math.pow(clientY, 2) + Math.pow(clientX, 2));

        const whereIsMouse = Math.max(1, Math.min(
            Math.round(dist / maxDist * 100),
            98
        ));

        body.style.background = `linear-gradient(${deg}deg, ${bgGradientStart} 0%,${bgGradientEnd} ${whereIsMouse}%,${bgGradientEnd} ${whereIsMouse+1}%,${bgGradientStart} 100%)`;
    });
}