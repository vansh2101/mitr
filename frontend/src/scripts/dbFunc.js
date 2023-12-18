import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


export function add_file_to_db(user, project, file, code){
    const db = firebase.firestore()

    db.collection('projects').doc(user).collection(project).doc(file).set({
        name: file,
        code: code
    })
}


export function get_files_from_db(user, project){
    const db = firebase.firestore()

    db.collection('projects').doc(user).collection(project).get()
}

export function get_workspaces(user){
    const db = firebase.firestore()

    db.collection('projects').doc(user).get()
}


export function create_workspace(user, name){
    const db = firebase.firestore()

    db.collection('projects').doc(user).collection(name).doc('index.js').set({
        name: 'index.js',
        code: `// Welcome to Javascript`
    })

}


export function github_login(){
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider).then(res => {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.additionalUserInfo.username))
    })
}

export function logout(){
    firebase.auth().signOut().then(res => {
        localStorage.removeItem('user')
    })
}