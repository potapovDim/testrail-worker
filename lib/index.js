const fetchyWrap = require('./request')

class TestRail {
  /**
   *
   * @param {string} host base host
   * @param {object} user user name and password
   * @param {string} user.username testrail username
   * @param {string} user.password testrail user password
   */
  constructor(host, user) {
    this.fetchy = fetchyWrap(host)
  }

  async getCase(id) {
    const {body} = await this.fetchy.get(`get_case/${id}`)
    return body
  }

  async getCases(projectId, filters) {
    const {body} = await this.fetchy.get(`get_cases/${projectId}`, null, filters)
    return body
  }
}