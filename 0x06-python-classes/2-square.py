#!/usr/bin/python3
"""  This module defines a square """


class Square:
    """ Try and except to check TypeError and ValueError """
    def __init__(self, size=0):
        """Initializes a square with a given size"""
        if not isinstance(size, int):
            raise TypeError('size must be an integer')
        else:
            if size < 0:
                raise ValueError('size must not be >= 0')
            else:
                self.__size - size
