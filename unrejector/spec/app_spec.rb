require 'spec_helper.rb'

RSpec.describe 'The application' do
  it 'should allow accessing an applicant page' do
    # generate random string for applicant id
    applicant_id = ('a'..'z').to_a.shuffle[0,8].join
    get "/#{applicant_id}"
    expect(last_response).to be_ok
  end
end
