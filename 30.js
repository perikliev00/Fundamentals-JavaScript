function gramophone(brand,album,song) {
    let songDuration=(album.length * brand.length) * song.length / 2;
    const rotation=2.5;
    let rotations=songDuration/rotation;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}