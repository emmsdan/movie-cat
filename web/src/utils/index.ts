export const imageLoader  = ({ src }: { src: string }) => {
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}?auto=format&fit=crop&w=1933&q=1080`;
};
export const onScroll = (callback: ()=>{}) => {
    window.addEventListener("scroll", ()=>{
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 110) {
            callback();
        }
    });
}