export default function two_crystal_balls(breaks: boolean[]): number {
    const sqrt = Math.floor(Math.sqrt(breaks.length));
    
    for(let i = 0; i < breaks.length; i += sqrt){
        if (breaks[i]){
            for(let j = i - sqrt; j < i; j++){
                if (breaks[j])
                    return j;
            }
        }
    }
    return -1;
}