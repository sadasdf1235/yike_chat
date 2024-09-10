
type Styles = {
    name: string
    value: Record<string, string | number>
}[]

type Default = {
    name: string
    transform: (code: string, id: string) => { 
		code: string
		styles: Styles
		notPreset: string[]
		classNames: string[]
	}
}

type Option = {
	/** Default presets */
	presets: Default[]

	/** Default transformers */
	transformers?: Default[]
	
	/** The mode of the project */
	mode?: "development" | "production"

	/** Exclude files or directories */
	exclude?: string | string[]

	/** generate log */
	log?: boolean | ((filePath: string) => boolean)

	/** Read the uni.scss file to generate the color presets */
	readUniScssFileGenerateColorPresetValue?: boolean
	
	/** Custom default rules */
	rules?: [RegExp | string, (classNames: string[], colors: Record<string, string>) => Record<string, string>][]
	
	/** Production shortcut */
	shortcuts?: Record<string, string> | (Record<string, string> | [RegExp | string, (classNames: string[], colors: Record<string, string>) => string])[]
};


/** presuppose */
export declare const uno: () => Default

/** Pseudo */
export declare const variantGroup: () => Default

/** Register vite vue atomized CSS plug-in configuration */
export declare const defineConfig: (options: Option) => Option
