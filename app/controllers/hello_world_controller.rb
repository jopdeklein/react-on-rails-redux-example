class HelloWorldController < ApplicationController
  include ReactOnRails::Controller

  def index
    @hello_world_props = { name: "Jop" }
    redux_store("helloWorldStore", @hello_world_props)
  end
end
