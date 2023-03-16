class tile {
    constructor(x, y, r, img) {
        this.x = x
        this.y = y
        this.r = r
        this.img = img
    }

    display() {
        imageMode(CENTER)
        image(this.x = x, this.y = y, this.r, this.r, this.img = img)
        if (i < 4) {
            image(this.img, this.x * i, this.y)
        } else {
            image(this.img, this.x * i, this.y + 100)
        }
    }
}