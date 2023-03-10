
abstract class AbstractTakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void
    getRealTime(): number {
        return 3
    }
}

class AbstractInstagram extends AbstractTakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super( cameraMode, filter )
    }

    getSepia(): void {
        console.log("sepia");
        
    }
}
    
const newPhoto = new AbstractInstagram("Test", "test", 3)

