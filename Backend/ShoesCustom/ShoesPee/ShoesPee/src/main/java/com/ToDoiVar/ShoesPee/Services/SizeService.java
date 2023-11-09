package com.ToDoiVar.ShoesPee.Services;


import com.ToDoiVar.ShoesPee.Models.Size;

import java.util.List;

public interface SizeService {
    Size addSize(Size size);
    Size getSizeById(int id);
    List<Size> getAllSize();
}
