(this.webpackJsonptasks_app=this.webpackJsonptasks_app||[]).push([[0],{283:function(e,t,A){"use strict";A.r(t);var n=A(11),a=A.n(n),c=A(0),r=A.n(c),s=A(18),o=A(135),i=A.n(o)()(),u=A(28),l=A(10),d=A(12),g=A(13),p=A(16),h=A(15),j=A(22),O=A.n(j),b=A(8),f=A(39),m=A(136),B=A.n(m).a.create({baseURL:"http://localhost:3001"}),w=function(){return function(){var e=Object(f.a)(O.a.mark((function e(t){var A;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("/tasks");case 2:A=e.sent,t({type:"FETCH_TASKS",payload:A.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(f.a)(O.a.mark((function t(A,n){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().auth.userId,t.next=3,B.post("/notes",Object(b.a)(Object(b.a)({},e),{},{userId:a}));case 3:c=t.sent,A({type:"CREATE_NOTE",payload:c.data}),i.push("/notes");case 6:case"end":return t.stop()}}),t)})));return function(e,A){return t.apply(this,arguments)}}()},y=function(){return function(){var e=Object(f.a)(O.a.mark((function e(t){var A;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("/notes");case 2:A=e.sent,t({type:"FETCH_NOTES",payload:A.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=A(1),C=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){var e;Object(d.a)(this,A);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId(),e.auth.currentUser.get().getBasicProfile().getName(),e.auth.currentUser.get().getBasicProfile().getGivenName()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(g.a)(A,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"706314816923-fe7r4hlmokk45oug7p03h50upmk7r82v.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(v.jsxs)("button",{onClick:this.onSignOutClick,className:"btn btn-danger ",children:[Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-google mx-2 ",viewBox:"0 0 16 16",children:Object(v.jsx)("path",{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"})}),"Sign Out"]}):Object(v.jsxs)("button",{onClick:this.onSignInClick,className:"btn btn-danger",children:[Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-google mx-2",viewBox:"0 0 16 16",children:Object(v.jsx)("path",{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"})}),"Sign In with Google"]})}},{key:"render",value:function(){return Object(v.jsx)("div",{children:this.renderAuthButton()})}}]),A}(c.Component),k=Object(l.b)((function(e,t){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e,t,A){return{type:"SIGN_IN",payload:{userId:e,userName:t,givenName:A}}},signOut:function(){return{type:"SIGN_OUT"}}})(C),D=Object(l.b)((function(e,t){return{firstName:e.auth.givenName,isSignedIn:e.auth.isSignedIn}}))((function(e){return Object(v.jsxs)("div",{className:"navbar nav-tabs p-0 w-100 container-sm d-flex flex-row my-1",children:[Object(v.jsx)("div",{className:"justify-content-start",children:Object(v.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",height:"45px",width:"50px"})}),Object(v.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(v.jsx)("div",{className:"nav-item",children:Object(v.jsx)(u.a,{to:"/tasks",className:"nav-link",children:"Tasks"})}),Object(v.jsx)("div",{className:"nav-item",children:Object(v.jsx)(u.a,{to:"/notes",className:"nav-link",children:"Notes"})}),Object(v.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[function(){if(e.isSignedIn&&e.firstName)return Object(v.jsxs)("span",{className:"mx-3",children:["Hello, ",Object(v.jsx)("strong",{children:e.firstName})]})}(),Object(v.jsx)(k,{})]})]})]})})),N=A(144),M=A(307),T=A(310),I=A(312),Q=A(315),F=A(141),E=A.n(F),S=Object(l.b)((function(e,t){return{currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{deleteTask:function(e){return function(){var t=Object(f.a)(O.a.mark((function t(A){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.delete("/tasks/".concat(e));case 2:A({type:"DELETE_TASK",payload:e}),i.push("/tasks");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},modifyTask:function(e,t){return function(){var A=Object(f.a)(O.a.mark((function A(n){var a;return O.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,B.patch("/tasks/".concat(t),e);case 2:a=A.sent,n({type:"MODIFY_TASK",payload:a.data});case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()}})((function(e){var t=e.task,A=e.deleteTask,n=e.modifyTask,a=e.currentUserId,c=e.isSignedIn,s=r.a.useState(null),o=Object(N.a)(s,2),i=o[0],u=o[1],l=function(e){u(e.currentTarget)},d=function(){u(!1)},g=function(e){e.preventDefault();var n=t.id;A(n)},p=function(e){e.preventDefault();n({isCompleted:!0},t.id)},h=function(e){e.preventDefault();n({isCompleted:!1},t.id)};return Object(v.jsx)("div",{children:function(){if(c&&t.userId===a)return Object(v.jsxs)("form",{className:"list-group-item",children:[t.isCompleted?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",{className:"mx-2",type:"checkbox",checked:!0,onChange:h}),Object(v.jsx)("span",{className:"text-decoration-line-through",children:t.task})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",{className:"mx-2",type:"checkbox",onChange:p}),Object(v.jsx)("span",{children:t.task})]}),Object(v.jsxs)(M.a,{children:[Object(v.jsx)(T.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:l,children:Object(v.jsx)(E.a,{})}),Object(v.jsxs)(I.a,{id:"simple-menu",anchorEl:i,open:Boolean(i),onClose:d,children:[Object(v.jsx)(Q.a,{onClick:g,children:"Delete"}),Object(v.jsx)(Q.a,{onClick:p,children:"Mark Completed"})]})]})]})}()})})),Y=function(e){return Object(v.jsxs)("div",{className:"d-flex flex-row w-100 my-3",children:[Object(v.jsx)("input",{onChange:e.onInputChange,className:"form-control mx-1",type:"search",placeholder:"Search","aria-label":"Search"}),Object(v.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})},K=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){var e;Object(d.a)(this,A);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={filtered:[],term:""},e.onInputChange=function(t){t.preventDefault(),e.setState({filtered:e.props.tasks.filter((function(e){return e.task.includes(t.target.value)})),term:t.target.value})},e}return Object(g.a)(A,[{key:"componentDidMount",value:function(){this.props.fetchTasks()}},{key:"renderTasks",value:function(){return 0===this.state.filtered.length&&""===this.state.term?this.props.tasks.map((function(e){return Object(v.jsx)(r.a.Fragment,{children:Object(v.jsx)(S,{task:e})},e.id)})):this.state.filtered.map((function(e){return Object(v.jsx)(r.a.Fragment,{children:Object(v.jsx)(S,{task:e})},e.id)}))}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"container-sm my-3 list-group",children:[Object(v.jsx)(Y,{onInputChange:this.onInputChange}),this.renderTasks()]})}}]),A}(r.a.Component),G=Object(l.b)((function(e,t){return{tasks:Object.values(e.tasks)}}),{fetchTasks:w})(K),z=A(313),J=A(311),H=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){var e;Object(d.a)(this,A);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderInput=function(t){var A=t.input,n=t.meta,a="form-control ".concat(n.error&&n.touched?" is-invalid":"");return Object(v.jsxs)("div",{className:"input-group",children:[Object(v.jsx)("input",Object(b.a)({className:a},A)),e.renderError(n),Object(v.jsx)("button",{className:"btn btn-outline-secondary",children:"Add Task"})]})},e.onSubmit=function(t){e.props.createTask(t,!1),t.task=""},e}return Object(g.a)(A,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return Object(v.jsx)("div",{className:"invalid-feedback",children:t})}},{key:"componentDidMount",value:function(){this.props.fetchTasks()}},{key:"render",value:function(){return Object(v.jsx)("form",{className:"container-sm my-4",onSubmit:this.props.handleSubmit(this.onSubmit),children:Object(v.jsx)(z.a,{name:"task",component:this.renderInput})})}}]),A}(r.a.Component),U=Object(J.a)({form:"taskForm",validate:function(e){var t={};return e.task||(t.task="You must enter a task"),t}})(H),L=Object(l.b)(null,{createTask:function(e,t){return function(){var A=Object(f.a)(O.a.mark((function A(n,a){var c,r;return O.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return c=a().auth.userId,A.next=3,B.post("/tasks",Object(b.a)(Object(b.a)({},e),{},{isCompleted:t,userId:c}));case 3:r=A.sent,n({type:"CREATE_TASK",payload:r.data}),i.push("/tasks");case 6:case"end":return A.stop()}}),A)})));return function(e,t){return A.apply(this,arguments)}}()},fetchTasks:w})(U),P=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){return Object(d.a)(this,A),t.apply(this,arguments)}return Object(g.a)(A,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"container-sm my-4",children:[Object(v.jsx)("h4",{className:"text-muted text-left",children:"Todos for Today"}),Object(v.jsx)(G,{}),Object(v.jsx)(L,{})]})}}]),A}(c.Component),R=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){var e;Object(d.a)(this,A);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderInput=function(t){var A=t.input,n=t.meta,a="form-control ".concat(n.error&&n.touched?" is-invalid":"");return Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("h4",{children:"Create your Note here"}),Object(v.jsx)("textarea",Object(b.a)(Object(b.a)({className:a},A),{},{rows:"5"})),e.renderError(n),Object(v.jsx)("button",{type:"submit",className:"btn btn-outline-secondary my-4",children:"Submit"})]})},e.onSubmit=function(t){e.props.onSubmit(t),t.note=""},e}return Object(g.a)(A,[{key:"componentDidMount",value:function(){}},{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return Object(v.jsx)("div",{className:"invalid-feedback",children:t})}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"container-sm my-4",children:Object(v.jsx)("form",{onSubmit:this.props.handleSubmit(this.onSubmit),children:Object(v.jsx)(z.a,{name:"note",component:this.renderInput})})})}}]),A}(r.a.Component),X=Object(J.a)({form:"createNoteForm",validate:function(e){var t={};return e.note||(t.note="You must enter something in the text area."),t}})(R),W=Object(l.b)(null,{createNote:x})(X),V=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){var e;Object(d.a)(this,A);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.createNote(t),t.note=""},e}return Object(g.a)(A,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(W,{onSubmit:this.onSubmit})})}}]),A}(r.a.Component),Z=Object(l.b)(null,{createNote:x})(V),q=A(46),_=A.n(q),$=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){var e;Object(d.a)(this,A);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.modifyNote(e.props.match.params.id,t)},e}return Object(g.a)(A,[{key:"componentDidMount",value:function(){this.props.fetchNote(this.props.match.params.id)}},{key:"render",value:function(){return this.props.note?Object(v.jsx)("div",{children:Object(v.jsx)(W,{onSubmit:this.onSubmit,initialValues:_.a.pick(this.props.note,"note")})}):Object(v.jsx)("div",{children:"Loading..."})}}]),A}(r.a.Component),ee=Object(l.b)((function(e,t){return{note:e.notes[t.match.params.id]}}),{fetchNote:function(e){return function(){var t=Object(f.a)(O.a.mark((function t(A){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.get("/notes/".concat(e));case 2:n=t.sent,A({type:"FETCH_NOTE",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},modifyNote:function(e,t){return function(){var A=Object(f.a)(O.a.mark((function A(n){var a;return O.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,B.patch("/notes/".concat(e),t);case 2:a=A.sent,n({type:"MODIFY_NOTE",payload:a.data}),i.push("/notes");case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()}})($),te=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){var e;Object(d.a)(this,A);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).deleteNote=function(t){t.preventDefault(),e.props.deleteNote(e.props.note.id),e.props.fetchNotes()},e.renderNote=function(){if(e.props.isSignedIn&&e.props.note.userId===e.props.currentUserId)return Object(v.jsx)("div",{className:"card bg-light mb-3",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("p",{className:"card-text",children:e.props.note.note}),Object(v.jsx)(u.a,{to:"/notes/modify/".concat(e.props.note.id),className:"btn btn-secondary mx-1",children:"Modify"}),Object(v.jsx)(u.a,{onClick:e.deleteNote,to:"/notes/delete/".concat(e.props.note.id),className:"btn btn-danger mx-1",children:"Delete"})]})})},e}return Object(g.a)(A,[{key:"render",value:function(){return Object(v.jsx)("div",{children:this.renderNote()})}}]),A}(c.Component),Ae=Object(l.b)((function(e,t){return{currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{deleteNote:function(e){return function(){var t=Object(f.a)(O.a.mark((function t(A){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.delete("/notes/".concat(e));case 2:A({type:"DELETE_NOTE",payload:e}),i.push("/notes");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchNotes:y})(te),ne=function(e){return Object(v.jsxs)("div",{className:"d-flex flex-row w-100 my-3",children:[Object(v.jsx)("input",{onChange:e.onInputChange,className:"form-control mx-1",type:"search",placeholder:"Search","aria-label":"Search"}),Object(v.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})},ae=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){var e;Object(d.a)(this,A);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={filtered:[],term:""},e.onInputChange=function(t){t.preventDefault(),e.setState({filtered:e.props.notes.filter((function(e){return e.note.includes(t.target.value)})),term:t.target.value})},e}return Object(g.a)(A,[{key:"componentDidMount",value:function(){this.props.fetchNotes()}},{key:"renderNotes",value:function(){return 0===this.state.filtered.length&&""===this.state.term?this.props.notes.map((function(e){return Object(v.jsx)(r.a.Fragment,{children:Object(v.jsx)(Ae,{note:e})},e.id)})):this.state.filtered.map((function(e){return Object(v.jsx)(r.a.Fragment,{children:Object(v.jsx)(Ae,{note:e})},e.id)}))}},{key:"renderButton",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(u.a,{to:"/notes/new",className:"btn btn-outline-secondary",children:"Create Note"})})}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"container-sm my-4",children:[Object(v.jsx)(ne,{onInputChange:this.onInputChange}),this.renderNotes(),this.renderButton()]})}}]),A}(r.a.Component),ce=Object(l.b)((function(e,t){return{notes:Object.values(e.notes)}}),{fetchNotes:y})(ae),re=function(){return Object(v.jsx)("div",{children:"ShowNote"})},se=function(){return Object(v.jsxs)("div",{className:"container-sm my-4",children:[Object(v.jsx)(u.a,{style:{width:"100%"},to:"/tasks",className:"btn btn-outline-dark btn-lg btn-block my-2",children:"Your Tasks"}),Object(v.jsx)(u.a,{style:{width:"100%"},to:"/notes",className:"btn btn-outline-dark btn-lg btn-block my-2",children:"Your Notes"})]})},oe=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){return Object(d.a)(this,A),t.apply(this,arguments)}return Object(g.a)(A,[{key:"render",value:function(){return this.props.isSignedIn&&this.props.userName?Object(v.jsx)("div",{className:"container-sm my-3",children:Object(v.jsxs)("h3",{style:{fontFamily:"Architects Daughter",fontSize:"2.7rem"},children:["Welcome, ",Object(v.jsx)("strong",{children:this.props.userName})]})}):null}}]),A}(r.a.Component),ie=Object(l.b)((function(e,t){return{userName:e.auth.userName,isSignedIn:e.auth.isSignedIn}}))(oe),ue=function(e){Object(p.a)(A,e);var t=Object(h.a)(A);function A(){return Object(d.a)(this,A),t.apply(this,arguments)}return Object(g.a)(A,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(ie,{}),Object(v.jsx)(Z,{}),Object(v.jsx)("div",{className:"container-sm my-4",children:Object(v.jsx)("h4",{children:"Add your Tasks here"})}),Object(v.jsx)(L,{}),Object(v.jsx)(se,{})]})}}]),A}(c.Component),le=function(){return Object(v.jsxs)(s.b,{history:i,children:[Object(v.jsx)(D,{}),Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{path:"/",exact:!0,component:ue}),Object(v.jsx)(s.a,{path:"/tasks",component:P}),Object(v.jsx)(s.a,{path:"/tasks/delete/:id",component:P}),Object(v.jsx)(s.a,{path:"/tasks/modify/:id",component:P}),Object(v.jsx)(s.a,{path:"/notes/new/",component:Z}),Object(v.jsx)(s.a,{path:"/notes/modify/:id",component:ee}),Object(v.jsx)(s.a,{path:"/notes",component:ce}),Object(v.jsx)(s.a,{path:"/notes/:id",component:re}),Object(v.jsx)(s.a,{path:"/notes/delete/:id",component:ce})]})]})},de=A(19),ge=A(314),pe=A(41),he={isSignedIn:null,userId:null,userName:null},je=Object(de.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(b.a)(Object(b.a)({},e),{},{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName,givenName:t.payload.givenName});case"SIGN_OUT":return Object(b.a)(Object(b.a)({},e),{},{isSignedIn:!1,userId:null,userName:null,givenName:null});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TASK":case"MODIFY_TASK":return Object(b.a)(Object(b.a)({},e),{},Object(pe.a)({},t.payload.id,t.payload));case"FETCH_TASKS":return Object(b.a)(Object(b.a)({},e),_.a.mapKeys(t.payload,"id"));case"DELETE_TASK":return _.a.omit(e,t.payload);default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NOTES":return Object(b.a)(Object(b.a)({},e),_.a.mapKeys(t.payload,"id"));case"CREATE_NOTE":case"FETCH_NOTE":case"MODIFY_NOTE":return Object(b.a)(Object(b.a)({},e),{},Object(pe.a)({},t.payload.id,t.payload));case"DELETE_NOTE":return _.a.omit(e,t.payload);default:return e}},form:ge.a}),Oe=A(143),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,fe=Object(de.e)(je,be(Object(de.a)(Oe.a)));a.a.render(Object(v.jsx)(l.a,{store:fe,children:Object(v.jsx)(le,{})}),document.getElementById("root"))}},[[283,1,2]]]);
//# sourceMappingURL=main.f71fa302.chunk.js.map