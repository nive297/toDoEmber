class TodoListSerializer < ActiveModel::Serializer
  attributes :id,:description, :title
end