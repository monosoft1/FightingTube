xof 0303txt 0032
template XSkinMeshHeader {
 <3cf169ce-ff7c-44ab-93c0-f78f62d172e2>
 WORD nMaxSkinWeightsPerVertex;
 WORD nMaxSkinWeightsPerFace;
 WORD nBones;
}

template VertexDuplicationIndices {
 <b8d65549-d7c9-4995-89cf-53a9a8b031e3>
 DWORD nIndices;
 DWORD nOriginalVertices;
 array DWORD indices[nIndices];
}

template SkinWeights {
 <6f0d123b-bad2-4167-a0d0-80224f25fabb>
 STRING transformNodeName;
 DWORD nWeights;
 array DWORD vertexIndices[nWeights];
 array FLOAT weights[nWeights];
 Matrix4x4 matrixOffset;
}

template FVFData {
 <b6e70a0e-8ef9-4e83-94ad-ecc8b0c04897>
 DWORD dwFVF;
 DWORD nDWords;
 array DWORD data[nDWords];
}

template EffectInstance {
 <e331f7e4-0559-4cc2-8e99-1cec1657928f>
 STRING EffectFilename;
 [...]
}

template EffectParamFloats {
 <3014b9a0-62f5-478c-9b86-e4ac9f4e418b>
 STRING ParamName;
 DWORD nFloats;
 array FLOAT Floats[nFloats];
}

template EffectParamString {
 <1dbc4c88-94c1-46ee-9076-2c28818c9481>
 STRING ParamName;
 STRING Value;
}

template EffectParamDWord {
 <e13963bc-ae51-4c5d-b00f-cfa3a9d97ce5>
 STRING ParamName;
 DWORD Value;
}


Material skyscrapers {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "Skyscrp.tga";
 }
}

Material buildz1 {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "buildz1.tga";
 }
}

Material buildz3 {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "buildz3.tga";
 }
}

Material buildz4 {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "buildz4.tga";
 }
}

Material buildz5 {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "buildz5.tga";
 }
}

Material buildz6 {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "buildz6.tga";
 }
}

Material buildz2 {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "buildz2.tga";
 }
}

Material roads {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "roads.tga";
 }
}

Material roads-2 {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "roads2.tga";
 }
}

Material tree-01 {
 1.000000;1.000000;1.000000;1.000000;;
 3.200000;
 0.000000;0.000000;0.000000;;
 0.000000;0.000000;0.000000;;

 TextureFilename {
  "trees-02.tga";
 }
}

Frame m_tree_05_LOD-01 {
 

 FrameTransformMatrix {
  1.000000,0.000000,0.000000,0.000000,0.000000,-0.000000,-1.000000,0.000000,-0.000000,1.000000,-0.000000,0.000000,0.000000,-12.675253,12.491668,1.000000;;
 }

 Frame {
  

  FrameTransformMatrix {
   1.000000,-0.000000,0.000000,0.000000,-0.000000,1.000000,-0.000000,0.000000,0.000000,-0.000000,1.000000,0.000000,0.000000,-0.000000,0.000000,1.000000;;
  }

  Mesh  {
   18;
   4.013335;2.224635;-0.146607;,
   4.013335;2.224635;19.278370;,
   -4.013354;-2.224629;19.278370;,
   -4.013354;-2.224629;19.278370;,
   -4.013354;-2.224629;-0.146607;,
   4.013335;2.224635;-0.146607;,
   -4.013358;2.224632;19.278372;,
   -4.013352;2.224639;-0.146607;,
   4.013337;-2.224632;19.278370;,
   4.013335;-2.224628;-0.146608;,
   4.013337;-2.224632;19.278370;,
   -4.013352;2.224639;-0.146607;,
   -0.120130;4.587104;19.278372;,
   -0.120126;4.587106;-0.146608;,
   0.120110;-4.587099;19.278370;,
   0.120110;-4.587099;-0.146608;,
   0.120110;-4.587099;19.278370;,
   -0.120126;4.587106;-0.146608;;
   6;
   3;0,1,2;,
   3;3,4,5;,
   3;6,7,8;,
   3;9,10,11;,
   3;12,13,14;,
   3;15,16,17;;

   MeshNormals  {
    18;
    0.484809;-0.874620;0.000000;,
    0.484809;-0.874620;0.000000;,
    0.484809;-0.874620;0.000000;,
    0.484809;-0.874620;0.000000;,
    0.484809;-0.874620;0.000000;,
    0.484809;-0.874620;0.000000;,
    -0.484809;-0.874620;-0.000000;,
    -0.484810;-0.874620;-0.000000;,
    -0.484809;-0.874620;-0.000000;,
    -0.484810;-0.874620;-0.000000;,
    -0.484809;-0.874620;-0.000000;,
    -0.484810;-0.874620;-0.000000;,
    -0.999657;-0.026177;-0.000000;,
    -0.999657;-0.026177;-0.000000;,
    -0.999657;-0.026177;-0.000000;,
    -0.999657;-0.026177;-0.000000;,
    -0.999657;-0.026177;-0.000000;,
    -0.999657;-0.026177;-0.000000;;
    6;
    3;0,1,2;,
    3;3,4,5;,
    3;6,7,8;,
    3;9,10,11;,
    3;12,13,14;,
    3;15,16,17;;
   }

   MeshMaterialList  {
    1;
    6;
    0,
    0,
    0,
    0,
    0,
    0;
    { tree-01 }
   }

   MeshTextureCoords  {
    18;
    0.769303;0.996959;,
    0.769303;0.526700;,
    0.999424;0.526700;,
    0.999424;0.526700;,
    0.999424;0.996959;,
    0.769303;0.996959;,
    0.769303;0.526700;,
    0.769303;0.996959;,
    0.999424;0.526700;,
    0.999424;0.996959;,
    0.999424;0.526700;,
    0.769303;0.996959;,
    0.769303;0.526700;,
    0.769303;0.996959;,
    0.999424;0.526700;,
    0.999424;0.996959;,
    0.999424;0.526700;,
    0.769303;0.996959;;
   }
  }
 }
}