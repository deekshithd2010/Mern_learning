class AppModel {
    DoctorModel = () => {
        const collection_name = 'doctor';
        const collection_fields = {
            name: String, 
            specialization: String, 
            phone_number: String,
            location: String

        };
        const collection_config = {
            timestamps: false
        };
        
        const schema = mongoose.Schema(collection_fields, collection_config);
        const Model = mongoose.model(collection_name, schema);
    
        return Model;
    }
}

module.exports = AppModel;