map = function(doc) {
  if (doc.java_type == 'org.taktik.icure.entities.Patient' && !doc.deleted && doc.medicalLocationId) {
    emit(doc.medicalLocationId, doc._id);
  }
}
