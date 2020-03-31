class examplePrivateConstructor {// this class should call just for statics methods
	private constructor() {}
}

const example2 = new examplePrivateConstructor(); //NOTE we cannot do it because it is un accessible