import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


function static_code(workspace, type=null){
    const pkg = ```
    {
        "name": ${workspace},
        "version": "0.1.0",
        "private": true,
        "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
        },
        "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
        },
        "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
        },
        "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
        },
        "devDependencies": {
        "autoprefixer": "^10.4.16",
        }
    }  
    ```

    return pkg
}



export function add_file_to_db(user, project, file, code){
    const db = firebase.firestore()

    db.collection('projects').doc(user).collection(project).doc(file).set({
        name: file,
        code: code
    })
}


export async function get_files_from_db(user, project){
    const db = firebase.firestore()

    const files = await db.collection('projects').doc(user).collection(project).get()

    const folders = []
    const structure = {}
    
    files.forEach(file => {
        const data = file.data()

        if(!(data.folder in folders)){
            folders.push(data.folder)
            structure[data.folder] = [data]
        }
        else{
            structure[data.folder] = [...structure[data.folder], data]
        }
    })
    
    return {folders, structure}
}

export function get_workspaces(user){
    const db = firebase.firestore()

    return db.collection('projects').doc(user).get()
}


export function create_workspace(user, name, workspaces){
    const db = firebase.firestore()

    db.collection('projects').doc(user).set({
        workspaces: workspaces
    })

    db.collection('projects').doc(user).collection(name).doc('package.json').set({
        name: 'package.json',
        code: static_code(name),
        folder: '/',
    })

    console.log('done')

}


export function github_login(){
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider).then(res => {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.additionalUserInfo.username))
        window.location.href = '/projects'
    })
}

export function logout(){
    firebase.auth().signOut().then(res => {
        localStorage.removeItem('user')
        window.location.href = '/'
    })
}


export async function upload(uri){
    if (uri !== undefined){
      const response = await fetch(uri)
      const blob = await response.blob()

      let path = 'convert_img'

      var ref = firebase.storage().ref().child(path)
      return ref.put(blob)
    }
  }