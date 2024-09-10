
/** Register the vite vue atomized CSS plugin */
declare function unocss(): { 
    name: string
    enforce: string 
    transform: (code: string, id: string) => string | void
};


export default unocss;