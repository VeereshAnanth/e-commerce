const Category = require("./../db/category");

async function addCategory(model){
    let category = new Category({ name: model.name });
   await category.save();
   return category.toObject();
}

async function updateCategory(id,model){
   await Category.findOneAndUpdate({_id: id}, model);
   return;
}

async function deleteCategory(id,model){
   await Category.findByIdAndDelete({_id: id}, model);
   return;
}

module.exports = {addCategory, updateCategory}
