const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// loading in JSON data and displaying it 

d3.json(URL).then(function(data)) {
    let metadata = data.metadata;
    let metaarray = metadata.filter(sampleobject => 
        sampleobject.id == sample);
     let results= metaarray[0]   


    
    
    
    
    
    
    console.log(data);
  }
  );

  //Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual

  let results = URL.filter()
    
  
  
 
