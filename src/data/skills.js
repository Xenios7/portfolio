const DEVICONS = 'https://raw.githubusercontent.com/devicons/devicon/master/icons'
const DEVICONS_REF = 'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons'

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Java',   icon: `${DEVICONS}/java/java-original.svg` },
      { name: 'Go',     icon: `${DEVICONS}/go/go-original.svg` },
      { name: 'C#',     icon: `${DEVICONS}/csharp/csharp-original.svg` },
      { name: 'Python', icon: `${DEVICONS}/python/python-original.svg` },
      { name: 'C',      icon: `${DEVICONS}/c/c-original.svg` },
      { name: 'C++',    icon: `${DEVICONS}/cplusplus/cplusplus-original.svg` },
    ]
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    skills: [
      { name: 'Docker',     icon: `${DEVICONS}/docker/docker-original.svg` },
      { name: 'Kubernetes', icon: `${DEVICONS}/kubernetes/kubernetes-plain.svg` },
      { name: 'Prometheus', icon: `${DEVICONS}/prometheus/prometheus-original.svg` },
      { name: 'Grafana',    icon: `${DEVICONS}/grafana/grafana-original.svg` },
      { name: 'Linux',      icon: `${DEVICONS}/linux/linux-original.svg` },
      { name: 'Git',        icon: `${DEVICONS}/git/git-original.svg` },
    ]
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: `${DEVICONS}/postgresql/postgresql-original.svg` },
      { name: 'OracleDB',   icon: `${DEVICONS}/oracle/oracle-original.svg` },
      { name: 'SQL Server', icon: `${DEVICONS}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
      { name: 'MySQL',      icon: `${DEVICONS}/mysql/mysql-original.svg` },
    ]
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: [
      { name: 'Spring Boot',   icon: `${DEVICONS}/spring/spring-original.svg` },
      { name: 'ASP.NET Core',  icon: `${DEVICONS}/dotnetcore/dotnetcore-original.svg` },
      { name: 'FastAPI',       icon: `${DEVICONS_REF}/fastapi/fastapi-original.svg` },
    ]
  }
]
