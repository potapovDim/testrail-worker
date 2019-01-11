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

  // ___________________________________________________
  async getCase(id) {
    const {body} = await this.fetchy.get(`get_case/${id}`)
    return body
  }

  async getCases(projectId, filters) {
    const {body} = await this.fetchy.get(`get_cases/${projectId}`, null, filters)
    return body
  }

  async addCase(sectionId, caseData) {
    const {body} = this.fetchy.post(`add_case/${sectionId}`, caseData)
    return body
  }

  async updateCase(caseId, caseData) {
    const {body} = this.fetchy.post(`update_case/${caseId}`, caseData)
    return body
  }

  async deleteCase(caseId) {
    const {body} = this.fetchy.post(`delete_case/${caseId}`)
    return body
  }
  // ___________________________________________________
  async getCaseFields() {
    const {body} = this.fetchy.get('get_case_fields')
    return body
  }

  async getCaseTypes() {
    const {body} = this.fetchy.get('get_case_types')
    return body
  }
  // ___________________________________________________
}
