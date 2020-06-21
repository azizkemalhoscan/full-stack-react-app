# full-stack-react-app
 Teamtreehouse Unit 10 Full stack project

1- npx create-react-app client

2- npm install cors => const cors = require('cors') => app.use(cors()); in api/app.js
if need more stuff go to => https://www.npmjs.com/package/cors#installation.

3- on CourseDetail component I struggled to figure to pull only the relevant data. I thought I should pull whole data and map it by checking if it macthes with this.props.match.id. But I should have         
fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`) in the first place

