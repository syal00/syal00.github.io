export const getSkillImage = (skillName) => {
  const skill = skillName.toLowerCase().replace(/\s+/g, '-');
  
  switch (skill) {
    case 'python':
      return '/assets/svg/skills/python.svg';
    case 'java':
      return '/assets/svg/skills/java.svg';
    case 'javascript':
    case 'js':
      return '/assets/svg/skills/javascript.svg';
    case 'c':
      return '/assets/svg/skills/c.svg';
    case 'c#':
    case 'csharp':
      return '/assets/svg/skills/csharp.svg';
    case 'c++':
    case 'cpp':
      return '/assets/svg/skills/cpp.svg';
    case 'html':
    case 'html5':
      return '/assets/svg/skills/html.svg';
    case 'css':
    case 'css3':
      return '/assets/svg/skills/css.svg';
    case 'bootstrap':
      return '/assets/svg/skills/bootstrap.svg';
    case 'react':
      return '/assets/svg/skills/react.svg';
    case 'spring-boot':
      return '/assets/svg/skills/spring.svg';
    case 'rest-apis':
      return '/assets/svg/skills/api.svg';
    case 'mysql':
      return '/assets/svg/skills/mysql.svg';
    case 'sqlite':
      return '/assets/svg/skills/sqlite.svg';
    case 'git':
      return '/assets/svg/skills/git.svg';
    case 'linux':
      return '/assets/svg/skills/linux.svg';
    case 'unix':
      return '/assets/svg/skills/unix.svg';
    case 'kubernetes':
    case 'k8s':
      return '/assets/svg/skills/kubernetes.svg';
    case '.net':
      return '/assets/svg/skills/dotnet.svg';
    case 'php':
      return '/assets/svg/skills/php.svg';
    case 'node.js':
    case 'nodejs':
      return '/assets/svg/skills/nodejs.svg';
    case 'express':
      return '/assets/svg/skills/express.svg';
    case 'mongodb':
      return '/assets/svg/skills/mongodb.svg';
    case 'docker':
      return '/assets/svg/skills/docker.svg';
    case 'aws':
      return '/assets/svg/skills/aws.svg';
    case 'azure':
      return '/assets/svg/skills/azure.svg';
    case 'gcp':
      return '/assets/svg/skills/gcp.svg';
    case 'typescript':
      return '/assets/svg/skills/typescript.svg';
    case 'vue.js':
    case 'vuejs':
      return '/assets/svg/skills/vue.svg';
    case 'angular':
      return '/assets/svg/skills/angular.svg';
    default:
      return '/assets/svg/skills/default.svg';
  }
}
