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

  async getCaseFields() {
    const {body} = this.fetchy.get('get_case_fields')
    return body
  }

  async getCaseTypes() {
    const {body} = this.fetchy.get('get_case_types')
    return body
  }


  async getMilestone(id) {
    const {body} = await this.fetchy.get(`get_milestone/${id}`)
    return body
  }

  async getMilestones(projectId, filters) {
    const {body} = await this.fetchy.get(`get_milestones/${projectId}`, null, filters)
    return body
  }

  async addMilestone(projectId, data) {
    const {body} = await this.fetchy.post(`add_milestone/${projectId}`, JSON.stringify(data))
    return body
  }

  async updateMilestone(milestone_id, data) {
    const {body} = await this.fetchy.post(`update_milestone/${milestone_id}`, JSON.stringify(data))
    return body
  }

  async deleteMilestone(milestone_id) {
    const {body} = await this.fetchy.post(`delete_milestone/${milestone_id}`)
    return body
  }

  async getPlan(id) {
    const {body} = await this.fetchy.get(`get_plan/${id}`)
    return body
  }

  async getPlans(projectId, filters) {
    const {body} = await this.fetchy.get(`get_plans/${projectId}`, null, filters)
    return body
  }

  async addPlan(projectId, data) {
    const {body} = await this.fetchy.post(`add_plan/${projectId}`, JSON.stringify(data))
    return body
  }

  async addPlanEntry(planId, data) {
    const {body} = await this.fetchy.post(`add_plan_entry/${planId}`, JSON.stringify(data))
    return body
  }

  async updatePlan(planId, data) {
    const {body} = await this.fetchy.post(`update_plan/${planId}`, JSON.stringify(data))
    return body
  }

  async updatePlanEntry(planId, entry_id, data) {
    const {body} = await this.fetchy.post(`update_plan_entry/${planId}/${entry_id}`, JSON.stringify(data))
    return body
  }

  async closePlan(planId) {
    const {body} = await this.fetchy.post(`close_plan/${planId}`)
    return body
  }

  async deletePlan(planId) {
    const {body} = await this.fetchy.post(`delete_plan/${planId}`)
    return body
  }

  async deletePlanEntry(planId, entry_id) {
    const {body} = await this.fetchy.post(`delete_plan_entry/${planId}/${entry_id}`)
    return body
  }
}
