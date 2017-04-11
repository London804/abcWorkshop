/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface IVideoDetails {
	age: number;
	region: string;
	date: string;
}

interface IVideo {
	title: string;
	author: string;
	id: string
	viewDetails: Array<IVideoDetails>
}
