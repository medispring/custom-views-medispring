map = function (doc) {
  var emit_patients_by_mhc = function (hcparty, doc) {
    if(doc.medicalHouseContracts.length){
      doc.medicalHouseContracts.forEach(function (mhc) {
        if(mhc.startOfCoverage && mhc.startOfCoverage !== null){
          emit([hcparty, mhc.startOfCoverage, mhc.endOfCoverage])
        }
      });
    }
  };

  if (doc.java_type === 'org.taktik.icure.entities.Patient' && !doc.deleted) {
    if (doc.delegations) {
      Object.keys(doc.delegations).forEach(function (k) {
        emit_patients_by_mhc(k, doc);
      });
    }
  }
};

