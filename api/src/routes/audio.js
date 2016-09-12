const router = require('koa-router')();

router.post('/add', function* () {
    const playlist = this.request.body.playlist;
    const name = this.request.body.songName;
    const url = this.request.body.url;
    yield db.Audio.findOrCreate({
        where  : {
            url,
        },
        default: {
            name,
            PlaylistUuid: playlist,
        },
    }).spread((audio, created) => {
        this.body = { status: 'ok' };
    })
});

router.get('/get/:id', function* () {
    this.body = { getted: true };
})


module.exports = router;