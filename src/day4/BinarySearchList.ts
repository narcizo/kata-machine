export default function bs_list(haystack: number[], needle: number): boolean {
    let stop = haystack.length; 
    let start = 0;

    do {
        const index = Math.floor((start + stop)/2);
        
        if(haystack[index] == needle) {
            return true;
        } else if (haystack[index] < needle) {
            start = index + 1;
        } else if (haystack[index] > needle) {
            stop = index;
        }
    } while(stop > start);
    return false;
}