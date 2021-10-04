var myData = {
    name: 'lisa',
    age: 44,
    sayBye: function(){
        console.log("bye", this.name)
    },
}

module.exports = myData;