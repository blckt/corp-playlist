const router = require('koa-router')();

router.post('/add', function* () {
    const name = this.request.body.name;
    const id = this.user.id;
    yield db.Playlist.create({
        name,
        UserId: id,
    }).then((user) => {
        this.body = { result: 'added' };
    }).catch(err => {
        this.body = { result: 'falied', message: err.message };
    });
});
router.post('/delete', function * () {
    const id = +this.request.body.id;

    yield db.Playlist.findOne({
        where: {
            id, UserId: this.user.id
        }
    }).then(playlist => {
        playlist && playlist.destroy().then(()=>this.body = { result: 'deleted' }).catch(err=>this.body = {
            result : 'failed',
            message: err.message
        })
    }).catch(err=>this.body = err);
});
router.get('/getAll', function* () {
    yield db.Playlist.find({
        where: {
            UserId: this.user.id,
        }
    }).then((data)=> {
        this.body = { result: data.get() }
    }).catch(err=> {
        this.body = err;
    });
    //  this.body='yo';
});
router.get('/get/:name', function* () {
    console.log(this.request);
    this.body = 'yo';
    //
    //yield db.Playlist.findOne({
    //    where: {
    //        name: this.request.body.playlist,
    //    }
    //}).then(data=>{
    //
    //})
})
module.exports = router;